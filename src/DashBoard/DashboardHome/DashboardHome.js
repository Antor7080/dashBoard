import React from 'react';
import Navigations from '../../Shareds/Navigations';



const DashboardHome = () => {
    return (
        <div>
            <Navigations></Navigations>
            <main className="pt-5 mt-5">
                <div className="container-fluid">
                    <h3 className='px-3 pb-3 fw-bold'>Dashboard</h3>
                    <div class="container">
                        <div class="row gy-4">
                            <div class="col-6 col-lg-3 col-md-4">
                                <div className="p-3 mb-3 h-100 shadow">
                                    <div className="d-flex justify-content-between">
                                        <h1 style={{ fontSize: ' 50px' }} className='text-danger'>
                                            <i class="far fa-chart-bar"></i>
                                        </h1>
                                        <div className='text-end'>
                                            <small>Visitors</small>
                                            <h3>65,550</h3>
                                        </div>
                                    </div>
                                    <hr />
                                    <small className='text-secondary'><i class="fas fa-exclamation-circle px-2"></i>   81% lower growth </small>
                                </div>

                            </div>
                            <div class="col-6 col-lg-3 col-md-4">
                                <div className="p-3 mb-3 h-100 shadow">
                                    <div className="d-flex justify-content-between">
                                        <h1 style={{ fontSize: ' 50px' }} className='text-warning'>
                                            <i class="fas fa-shopping-cart"></i>
                                        </h1>
                                        <div className='text-end'>
                                            <small>Orders</small>
                                            <h3>656</h3>
                                        </div>
                                    </div>
                                    <hr />
                                    <small className='text-secondary'> <i class="far fa-bookmark px-2"></i>  Total sales </small>
                                </div>
                            </div>
                            <div class="col-6 col-lg-3  col-md-4">
                                <div className="p-3  h-100 shadow">
                                    <div className="d-flex justify-content-between">
                                        <h1 style={{ fontSize: ' 50px' }} className='text-success'>
                                            <i class="fas fa-dollar-sign"></i>
                                        </h1>
                                        <div className='text-end'>
                                            <small>Revenue</small>
                                            <h3>$65656</h3>
                                        </div>
                                    </div>
                                    <hr />
                                    <small className='text-secondary'> <i class="far fa-calendar-alt px-2"></i>   Sales Per Week </small>
                                </div>
                            </div>
                            <div class="col-6 col-lg-3 col-md-4">
                                <div className="p-3  h-100 shadow">
                                    <div className="d-flex justify-content-between">
                                        <h1 style={{ fontSize: ' 50px' }} className='text-primary'>
                                            <i class="fab fa-twitter"></i>
                                        </h1>
                                        <div className='text-end'>
                                            <small>Followers</small>
                                            <h3>62,500+</h3>
                                        </div>
                                    </div>
                                    <hr />
                                    <small className='text-secondary'> <i class="fas fa-redo-alt px-2"></i>   Just Updated </small>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>

        </div >
    );
};

export default DashboardHome;