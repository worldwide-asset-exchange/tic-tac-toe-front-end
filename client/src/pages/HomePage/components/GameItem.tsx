import { GameItemLayout } from './GameItem.styled';

import { CustomButton } from 'components/Button';

export const GameItem = () => {
    return (
        <GameItemLayout>
            <div className="game-item-div-1">
                <div className="game-item-div-2">
                    Host: <span className="game-item-div-3">user1.wam</span>
                </div>
                <div className="game-item-div-2">
                    Challenger: <span className="game-item-div-3">user1.wam</span>
                </div>
                <div className="game-item-div-2">
                    End: <span className="game-item-div-3">False</span>
                </div>
                <div className="game-item-div-2">
                    Turn: <span className="game-item-div-3">user1.wam</span>
                </div>
            </div>
            <div>
                <CustomButton>View</CustomButton>
            </div>
        </GameItemLayout>
    );
};
