import React from 'react';
import { Link } from 'react-router-dom';
const Navigations = () => {
    return (
        <div>

            {/*      <!-- top navigation bar --> */}
            <nav class="navbar navbar-expand-lg navbar-light py-3   navStyle fixed-top sticky">
                <div class="container-fluid ">
                    <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#sidebar"
                        aria-controls="offcanvasExample">
                        <span class="navbar-toggler-icon" data-bs-target="#sidebar"></span>
                    </button>
                    <Link class="navbar-brand me-auto ms-lg-0 ms-3 text-uppercase fw-bold" to="/"><img width="200" src="https://payrasoft.com/wp-content/uploads/2021/12/payrasoft-vertical-logo-1024x128.png" alt="" /></Link>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#topNavBar"
                        aria-controls="topNavBar" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="topNavBar">
                        <form class="d-flex ms-auto my-3 my-lg-0">
                            <div class="input-group">
                                <input class="form-control" type="search" placeholder="Search" aria-label="Search" />
                                <button class="btn btn-primary" type="submit">
                                    <i class="bi bi-search"></i>
                                </button>
                            </div>
                        </form>
                        <ul class="navbar-nav">
                            <li class="nav-item dropdown">
                                <Link class="nav-link dropdown-toggle ms-2" to="/" role="button" data-bs-toggle="dropdown"
                                    aria-expanded="false">
                                    <i class="bi bi-person-fill"></i>
                                </Link>
                                <ul class="dropdown-menu dropdown-menu-end">
                                    <li><Link class="dropdown-item" to="/">Action</Link></li>
                                    <li><Link class="dropdown-item" to="/">Another action</Link></li>
                                    <li>
                                        <Link class="dropdown-item" to="/">Something else here</Link>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            {/*  <!-- top navigation bar -->
                <!-- offcanvas --> */}
            <div class="offcanvas offcanvas-start offcanv mt-3 sidebar-nav bg-dark" tabIndex="-1" id="sidebar">
                <div class="offcanvas-body p-0">
                    <nav class="navbar-dark">
                        <ul class="navbar-nav">

                            <li>
                                <Link to="/" class="nav-link px-3 active">
                                    <span class="me-2"><i class="fas fa-home"></i></span>
                                    <span className='fw-bold'>Dashboard</span>
                                </Link>
                            </li>
                            {/*    <li>
                                <Link to="/global-settings" class="nav-link px-3 active">
                                    <span class="me-2"><i class="fas fa-cog"></i></span>
                                    <span className='fw-bold'>Global Settings</span>
                                </Link>
                            </li> */}


                            {/*   <li>
                                <Link class="nav-link px-3 sidebar-link" data-bs-toggle="collapse" to="#module">
                                    <span class="me-2"> <i class="fas fa-graduation-cap"></i> </span>
                                    <span>Academic Module</span>
                                    <span class="ms-auto">
                                        <span class="right-icon">
                                            <i class="bi bi-chevron-down"></i>
                                        </span>
                                    </span>
                                </Link>
                                <div class="collapse" id="module">
                                    <ul class="navbar-nav ps-3">
                                        <li>
                                            <Link to="/session" class="nav-link px-3">
                                                <span class="me-2"> <i class="fas fa-graduation-cap"></i> </span>
                                                <span>Session</span>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="/" class="nav-link px-3">
                                                <span class="me-2"> <i class="fas fa-graduation-cap"></i> </span>
                                                <span>Shift</span>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="/" class="nav-link px-3">
                                                <span class="me-2"> <i class="fas fa-graduation-cap"></i> </span>
                                                <span>Medium</span>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="/" class="nav-link px-3">
                                                <span class="me-2"> <i class="fas fa-graduation-cap"></i> </span>
                                                <span>Class</span>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="/" class="nav-link px-3">
                                                <span class="me-2"> <i class="fas fa-graduation-cap"></i> </span>
                                                <span>Group</span>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="/" class="nav-link px-3">
                                                <span class="me-2"> <i class="fas fa-graduation-cap"></i> </span>
                                                <span>Section</span>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="/" class="nav-link px-3">
                                                <span class="me-2"> <i class="fas fa-graduation-cap"></i> </span>
                                                <span>Suject</span>
                                            </Link>
                                        </li>
                                    </ul>
                                </div>

                            </li> */}


                            {/* ======================= S T U D E N T == M A N A G E M E N T================ */}

                            {/*  <li>
                                <Link class="nav-link px-3 sidebar-link" data-bs-toggle="collapse" to="#students">
                                    <span class="me-2"> <i class="fas fa-tasks"></i></span>
                                    <span>Students Management</span>
                                    <span class="ms-auto">
                                        <span class="right-icon">
                                            <i class="bi bi-chevron-down"></i>
                                        </span>
                                    </span>
                                </Link>
                                <div class="collapse" id="students">
                                    <ul class="navbar-nav ps-3">
                                        <li>
                                            <Link to="/" class="nav-link px-3">
                                                <span class="me-2"> <i class="fas fa-graduation-cap"></i> </span>
                                                <span>New Student Admision</span>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="/" class="nav-link px-3">
                                                <span class="me-2"> <i class="fas fa-graduation-cap"></i> </span>
                                                <span>Pending Students</span>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="/" class="nav-link px-3">
                                                <span class="me-2"> <i class="fas fa-graduation-cap"></i> </span>
                                                <span>Students Id Card</span>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="/" class="nav-link px-3">
                                                <span class="me-2"> <i class="fas fa-graduation-cap"></i> </span>
                                                <span>Admit Card</span>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="/" class="nav-link px-3">
                                                <span class="me-2"> <i class="fas fa-graduation-cap"></i> </span>
                                                <span>Seet Plan</span>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="/" class="nav-link px-3">
                                                <span class="me-2"> <i class="fas fa-graduation-cap"></i> </span>
                                                <span>Student Details</span>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="/" class="nav-link px-3">
                                                <span class="me-2"> <i class="fas fa-graduation-cap"></i> </span>
                                                <span>Student Promotion</span>
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                            </li> */}




                            <li>
                                <Link class="nav-link px-3 sidebar-link" data-bs-toggle="collapse" to="#list1">
                                    <span class="me-2"> <i class="fas fa-tasks"></i></span>
                                    <span>list 1</span>
                                    <span class="ms-auto">
                                        <span class="right-icon">
                                            <i class="bi bi-chevron-down"></i>
                                        </span>
                                    </span>
                                </Link>
                                <div class="collapse" id="list1">
                                    <ul class="navbar-nav ps-3">
                                        <li>
                                            <Link to="/" class="nav-link px-3">
                                                <span class="me-2"> <i class="fas fa-graduation-cap"></i> </span>
                                                <span> sub list 1</span>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="/" class="nav-link px-3">
                                                <span class="me-2"> <i class="fas fa-graduation-cap"></i> </span>
                                                <span>sub list 2</span>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="/" class="nav-link px-3">
                                                <span class="me-2"> <i class="fas fa-graduation-cap"></i> </span>
                                                <span>sub list 3</span>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="/" class="nav-link px-3">
                                                <span class="me-2"> <i class="fas fa-graduation-cap"></i> </span>
                                                <span>sub list 4</span>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="/" class="nav-link px-3">
                                                <span class="me-2"> <i class="fas fa-graduation-cap"></i> </span>
                                                <span>sub list 5</span>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="/" class="nav-link px-3">
                                                <span class="me-2"> <i class="fas fa-graduation-cap"></i> </span>
                                                <span>sub list 6</span>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="/" class="nav-link px-3">
                                                <span class="me-2"> <i class="fas fa-graduation-cap"></i> </span>
                                                <span>sub list 7</span>
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                            </li>
                            <li>
                                <Link class="nav-link px-3 sidebar-link" data-bs-toggle="collapse" to="#list2">
                                    <span class="me-2"> <i class="fas fa-tasks"></i></span>
                                    <span>list 2</span>
                                    <span class="ms-auto">
                                        <span class="right-icon">
                                            <i class="bi bi-chevron-down"></i>
                                        </span>
                                    </span>
                                </Link>
                                <div class="collapse" id="list2">
                                    <ul class="navbar-nav ps-3">
                                        <li>
                                            <Link to="/" class="nav-link px-3">
                                                <span class="me-2"> <i class="fas fa-graduation-cap"></i> </span>
                                                <span> sub list 1</span>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="/" class="nav-link px-3">
                                                <span class="me-2"> <i class="fas fa-graduation-cap"></i> </span>
                                                <span>sub list 2</span>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="/" class="nav-link px-3">
                                                <span class="me-2"> <i class="fas fa-graduation-cap"></i> </span>
                                                <span>sub list 3</span>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="/" class="nav-link px-3">
                                                <span class="me-2"> <i class="fas fa-graduation-cap"></i> </span>
                                                <span>sub list 4</span>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="/" class="nav-link px-3">
                                                <span class="me-2"> <i class="fas fa-graduation-cap"></i> </span>
                                                <span>sub list 5</span>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="/" class="nav-link px-3">
                                                <span class="me-2"> <i class="fas fa-graduation-cap"></i> </span>
                                                <span>sub list 6</span>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="/" class="nav-link px-3">
                                                <span class="me-2"> <i class="fas fa-graduation-cap"></i> </span>
                                                <span>sub list 7</span>
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                            </li>
                            <li>
                                <Link class="nav-link px-3 sidebar-link" data-bs-toggle="collapse" to="#list3">
                                    <span class="me-2"> <i class="fas fa-tasks"></i></span>
                                    <span>list 1</span>
                                    <span class="ms-auto">
                                        <span class="right-icon">
                                            <i class="bi bi-chevron-down"></i>
                                        </span>
                                    </span>
                                </Link>
                                <div class="collapse" id="list3">
                                    <ul class="navbar-nav ps-3">
                                        <li>
                                            <Link to="/" class="nav-link px-3">
                                                <span class="me-2"> <i class="fas fa-graduation-cap"></i> </span>
                                                <span> sub list 3</span>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="/" class="nav-link px-3">
                                                <span class="me-2"> <i class="fas fa-graduation-cap"></i> </span>
                                                <span>sub list 2</span>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="/" class="nav-link px-3">
                                                <span class="me-2"> <i class="fas fa-graduation-cap"></i> </span>
                                                <span>sub list 3</span>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="/" class="nav-link px-3">
                                                <span class="me-2"> <i class="fas fa-graduation-cap"></i> </span>
                                                <span>sub list 4</span>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="/" class="nav-link px-3">
                                                <span class="me-2"> <i class="fas fa-graduation-cap"></i> </span>
                                                <span>sub list 5</span>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="/" class="nav-link px-3">
                                                <span class="me-2"> <i class="fas fa-graduation-cap"></i> </span>
                                                <span>sub list 6</span>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="/" class="nav-link px-3">
                                                <span class="me-2"> <i class="fas fa-graduation-cap"></i> </span>
                                                <span>sub list 7</span>
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                            </li>
                            <li>
                                <Link class="nav-link px-3 sidebar-link" data-bs-toggle="collapse" to="#list4">
                                    <span class="me-2"> <i class="fas fa-tasks"></i></span>
                                    <span>list 4</span>
                                    <span class="ms-auto">
                                        <span class="right-icon">
                                            <i class="bi bi-chevron-down"></i>
                                        </span>
                                    </span>
                                </Link>
                                <div class="collapse" id="list4">
                                    <ul class="navbar-nav ps-3">
                                        <li>
                                            <Link to="/" class="nav-link px-3">
                                                <span class="me-2"> <i class="fas fa-graduation-cap"></i> </span>
                                                <span> sub list 1</span>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="/" class="nav-link px-3">
                                                <span class="me-2"> <i class="fas fa-graduation-cap"></i> </span>
                                                <span>sub list 2</span>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="/" class="nav-link px-3">
                                                <span class="me-2"> <i class="fas fa-graduation-cap"></i> </span>
                                                <span>sub list 3</span>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="/" class="nav-link px-3">
                                                <span class="me-2"> <i class="fas fa-graduation-cap"></i> </span>
                                                <span>sub list 4</span>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="/" class="nav-link px-3">
                                                <span class="me-2"> <i class="fas fa-graduation-cap"></i> </span>
                                                <span>sub list 5</span>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="/" class="nav-link px-3">
                                                <span class="me-2"> <i class="fas fa-graduation-cap"></i> </span>
                                                <span>sub list 6</span>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="/" class="nav-link px-3">
                                                <span class="me-2"> <i class="fas fa-graduation-cap"></i> </span>
                                                <span>sub list 7</span>
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                            </li>
                            <li>
                                <Link class="nav-link px-3 sidebar-link" data-bs-toggle="collapse" to="#list5">
                                    <span class="me-2"> <i class="fas fa-tasks"></i></span>
                                    <span>list 5</span>
                                    <span class="ms-auto">
                                        <span class="right-icon">
                                            <i class="bi bi-chevron-down"></i>
                                        </span>
                                    </span>
                                </Link>
                                <div class="collapse" id="list5">
                                    <ul class="navbar-nav ps-3">
                                        <li>
                                            <Link to="/" class="nav-link px-3">
                                                <span class="me-2"> <i class="fas fa-graduation-cap"></i> </span>
                                                <span> sub list 1</span>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="/" class="nav-link px-3">
                                                <span class="me-2"> <i class="fas fa-graduation-cap"></i> </span>
                                                <span>sub list 2</span>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="/" class="nav-link px-3">
                                                <span class="me-2"> <i class="fas fa-graduation-cap"></i> </span>
                                                <span>sub list 3</span>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="/" class="nav-link px-3">
                                                <span class="me-2"> <i class="fas fa-graduation-cap"></i> </span>
                                                <span>sub list 4</span>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="/" class="nav-link px-3">
                                                <span class="me-2"> <i class="fas fa-graduation-cap"></i> </span>
                                                <span>sub list 5</span>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="/" class="nav-link px-3">
                                                <span class="me-2"> <i class="fas fa-graduation-cap"></i> </span>
                                                <span>sub list 6</span>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="/" class="nav-link px-3">
                                                <span class="me-2"> <i class="fas fa-graduation-cap"></i> </span>
                                                <span>sub list 7</span>
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                            </li>
                            <li>
                                <Link class="nav-link px-3 sidebar-link" data-bs-toggle="collapse" to="#list6">
                                    <span class="me-2"> <i class="fas fa-tasks"></i></span>
                                    <span>list 6</span>
                                    <span class="ms-auto">
                                        <span class="right-icon">
                                            <i class="bi bi-chevron-down"></i>
                                        </span>
                                    </span>
                                </Link>
                                <div class="collapse" id="list6">
                                    <ul class="navbar-nav ps-3">
                                        <li>
                                            <Link to="/" class="nav-link px-3">
                                                <span class="me-2"> <i class="fas fa-graduation-cap"></i> </span>
                                                <span> sub list 1</span>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="/" class="nav-link px-3">
                                                <span class="me-2"> <i class="fas fa-graduation-cap"></i> </span>
                                                <span>sub list 2</span>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="/" class="nav-link px-3">
                                                <span class="me-2"> <i class="fas fa-graduation-cap"></i> </span>
                                                <span>sub list 3</span>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="/" class="nav-link px-3">
                                                <span class="me-2"> <i class="fas fa-graduation-cap"></i> </span>
                                                <span>sub list 4</span>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="/" class="nav-link px-3">
                                                <span class="me-2"> <i class="fas fa-graduation-cap"></i> </span>
                                                <span>sub list 5</span>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="/" class="nav-link px-3">
                                                <span class="me-2"> <i class="fas fa-graduation-cap"></i> </span>
                                                <span>sub list 6</span>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="/" class="nav-link px-3">
                                                <span class="me-2"> <i class="fas fa-graduation-cap"></i> </span>
                                                <span>sub list 7</span>
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                            </li>
                            <li>
                                <Link class="nav-link px-3 sidebar-link" data-bs-toggle="collapse" to="#list7">
                                    <span class="me-2"> <i class="fas fa-tasks"></i></span>
                                    <span>list 7</span>
                                    <span class="ms-auto">
                                        <span class="right-icon">
                                            <i class="bi bi-chevron-down"></i>
                                        </span>
                                    </span>
                                </Link>
                                <div class="collapse" id="list7">
                                    <ul class="navbar-nav ps-3">
                                        <li>
                                            <Link to="/" class="nav-link px-3">
                                                <span class="me-2"> <i class="fas fa-graduation-cap"></i> </span>
                                                <span> sub list 1</span>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="/" class="nav-link px-3">
                                                <span class="me-2"> <i class="fas fa-graduation-cap"></i> </span>
                                                <span>sub list 2</span>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="/" class="nav-link px-3">
                                                <span class="me-2"> <i class="fas fa-graduation-cap"></i> </span>
                                                <span>sub list 3</span>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="/" class="nav-link px-3">
                                                <span class="me-2"> <i class="fas fa-graduation-cap"></i> </span>
                                                <span>sub list 4</span>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="/" class="nav-link px-3">
                                                <span class="me-2"> <i class="fas fa-graduation-cap"></i> </span>
                                                <span>sub list 5</span>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="/" class="nav-link px-3">
                                                <span class="me-2"> <i class="fas fa-graduation-cap"></i> </span>
                                                <span>sub list 6</span>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="/" class="nav-link px-3">
                                                <span class="me-2"> <i class="fas fa-graduation-cap"></i> </span>
                                                <span>sub list 7</span>
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                            </li>
                            <li>
                                <Link class="nav-link px-3 sidebar-link" data-bs-toggle="collapse" to="#list8">
                                    <span class="me-2"> <i class="fas fa-tasks"></i></span>
                                    <span>list 8</span>
                                    <span class="ms-auto">
                                        <span class="right-icon">
                                            <i class="bi bi-chevron-down"></i>
                                        </span>
                                    </span>
                                </Link>
                                <div class="collapse" id="list8">
                                    <ul class="navbar-nav ps-3">
                                        <li>
                                            <Link to="/" class="nav-link px-3">
                                                <span class="me-2"> <i class="fas fa-graduation-cap"></i> </span>
                                                <span> sub list 1</span>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="/" class="nav-link px-3">
                                                <span class="me-2"> <i class="fas fa-graduation-cap"></i> </span>
                                                <span>sub list 2</span>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="/" class="nav-link px-3">
                                                <span class="me-2"> <i class="fas fa-graduation-cap"></i> </span>
                                                <span>sub list 3</span>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="/" class="nav-link px-3">
                                                <span class="me-2"> <i class="fas fa-graduation-cap"></i> </span>
                                                <span>sub list 4</span>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="/" class="nav-link px-3">
                                                <span class="me-2"> <i class="fas fa-graduation-cap"></i> </span>
                                                <span>sub list 5</span>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="/" class="nav-link px-3">
                                                <span class="me-2"> <i class="fas fa-graduation-cap"></i> </span>
                                                <span>sub list 6</span>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="/" class="nav-link px-3">
                                                <span class="me-2"> <i class="fas fa-graduation-cap"></i> </span>
                                                <span>sub list 7</span>
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                            </li>


                        </ul>
                    </nav>
                </div>
            </div>



        </div>
    );
};

export default Navigations;