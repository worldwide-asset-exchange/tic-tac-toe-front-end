import { PageNotFoundLayout } from './PageNotFound.styled';

import { Link } from 'react-router-dom';

import PageNotFoundImg from 'assets/page_not_found.png';
import { _URL } from 'config/constant';

export const PageNotFound = (): JSX.Element => {
    return (
        <PageNotFoundLayout>
            <div className="page-not-found-div-1">
                <img src={PageNotFoundImg} alt="page not found" className="page-not-found-img-1" />
                <div className="page-not-found-div-2">404</div>
            </div>
            <div className="page-not-found-div-3">Page Not Found</div>
            <div className="page-not-found-div-4">The page you are looking for does not exist.</div>
            <div className="page-not-found-div-5">
                <Link to={_URL.HomePage}>
                    <>go to homepage</>
                </Link>
            </div>
        </PageNotFoundLayout>
    );
};
