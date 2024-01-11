import { GameLayout } from './Game.styled';

import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import State0 from 'assets/state_0.svg';
import Empty from 'assets/state_empty.svg';
import StateX from 'assets/state_x.svg';
import User1 from 'assets/user1.svg';
import User2 from 'assets/user2.svg';
import { ConfirmModal } from 'components/Modal/ConfirmModal';
import { selectWcwData } from 'components/Navigation/slice/selectors';
import { WcwNotificationError, WcwNotificationSuccess } from 'components/Notification';
import { translations } from 'locales/translations';
import { GameList } from 'services/game';
import { Move } from 'services/waxJsService';
import { iGameList } from 'utils/types/game';
import { decodeTo3x3Array } from 'utils/utils';

enum _UserTurn {
    NONE = 'NONE',
    HOST = 'HOST',
    CHALLENGER = 'CHALLENGER',
}

export const GamePage = (): JSX.Element => {
    const { t } = useTranslation();
    const { id } = useParams();
    const wcwData = useSelector(selectWcwData);

    const [isLoadGame, setIsLoadGame] = useState<boolean>(false);
    const [isValidGame, setIsValidGame] = useState<boolean>(true);

    const [turn, setTurn] = useState<_UserTurn>(_UserTurn.NONE);
    const [dataGame, setDataGame] = useState<iGameList>();

    const [isShowConfirm, setIsShowConfirm] = useState<boolean>(false);
    const [row, setRow] = useState(-1);
    const [column, setColumn] = useState(-1);

    useEffect(() => {
        loadGame();
    }, []);

    const loadGame = async () => {
        setIsLoadGame(true);
        try {
            const gameLists = await GameList();
            const gameDetail: any = gameLists?.find((game: any) => game?.id === id);
            //can not find game in data, invalid game
            if (!gameDetail?.id) {
                setIsValidGame(false);
            } else if (![gameDetail?.challenger, gameDetail?.host].includes(wcwData?.account)) {
                //View mode only
                setTurn(_UserTurn.NONE);
                setDataGame(gameDetail);
            } else {
                setDataGame(gameDetail);
                if (gameDetail?.turn === wcwData?.account) {
                    setTurn(_UserTurn.HOST);
                } else {
                    setTurn(_UserTurn.CHALLENGER);
                }
            }
        } catch (error) {}
        setIsLoadGame(false);
    };

    const move = async (value: number, [row, column]: number[]) => {
        if (turn === _UserTurn.HOST && value === 0 && dataGame?.winner === 'none') {
            setRow(row);
            setColumn(column);
            setIsShowConfirm(true);
        } else {
            setRow(-1);
            setColumn(-1);
        }
    };

    const deCodeSymbolGame = (id: number, key: number[]) => {
        const IsActiveCellBoard =
            id === 0 && turn === _UserTurn.HOST && dataGame?.winner === 'none';
        switch (id) {
            case 0:
                return (
                    <img
                        src={Empty}
                        className={`game-img ${IsActiveCellBoard ? 'active' : ''}`}
                        alt="empty icon"
                        key={id}
                        onClick={() => move(id, key)}
                    />
                );
            case 1:
                return <img src={State0} className="game-img" alt="empty icon" key={id} />;
            case 2:
                return <img src={StateX} className="game-img" alt="empty icon" key={id} />;
            default:
                return (
                    <img
                        src={Empty}
                        className={`game-img ${IsActiveCellBoard ? 'active' : ''}`}
                        alt="empty icon"
                        key={id}
                        onClick={() => move(id, key)}
                    />
                );
        }
    };

    const onSubmidMove = async () => {
        setIsShowConfirm(false);

        const tickBoard = await Move({
            game_id: `${id}`,
            by: wcwData?.account,
            row,
            column,
        });

        if (tickBoard?.transaction_id) {
            WcwNotificationSuccess(t(translations.game['move successful']));
        } else {
            WcwNotificationError(t(translations.game['move failed']));
        }
    };

    const gameMatrix = () => {
        const result: any[] = [];
        if (!dataGame?.board) {
            return result;
        }

        const decodedMatrix = decodeTo3x3Array(dataGame?.board);

        for (let row = 0; row < decodedMatrix?.length; ++row) {
            for (let col = 0; col < decodedMatrix?.[row]?.length; ++col) {
                result.push(deCodeSymbolGame(decodedMatrix[row][col], [row, col]));
            }
        }

        return result;
    };

    if (isLoadGame) {
        return <GameLayout>{t(translations.loading)}</GameLayout>;
    }

    if (!id || !isValidGame || !dataGame?.board) {
        return <GameLayout>{t(translations['no game found'])}</GameLayout>;
    }

    return (
        <GameLayout>
            <ConfirmModal
                isShow={isShowConfirm}
                onSubmit={onSubmidMove}
                onCancel={() => setIsShowConfirm(false)}
                title={`${t(translations.confirm['execute move at position'])} (${row} ${column})`}
            />
            <div className="game-container">
                <div className="game-div-1">
                    <img src={User1} alt="user" className="game-img-1" />
                    <div className="game-div-2">{dataGame?.host}</div>
                    {dataGame?.turn === dataGame?.host && (
                        <div className="game-div-3">{t(translations.turn)}</div>
                    )}
                </div>
                <div className="game-board">{gameMatrix()}</div>
                <div className="game-div-1">
                    <img src={User2} alt="user" className="game-img-1" />
                    <div className="game-div-2 right">{dataGame?.challenger}</div>
                    {dataGame?.turn === dataGame?.challenger && (
                        <div className="game-div-3">{t(translations.turn)}</div>
                    )}
                </div>
            </div>
        </GameLayout>
    );
};
