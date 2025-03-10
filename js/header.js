var logo_path = window.innerWidth <= 1000 ? 'img/logo-sticky-top.png' : 'img/logo.png';
var path = window.location.pathname;
var page = path.split("/").pop();

var home = '';
var about = '';
var services = '';
var projects = '';
var contact = '';
switch (page) {
  case 'index.html':
    home = 'active';
    break;
  case 'about.html':
    about = 'active';
    break;
  case 'service.html':
    services = 'active';
    break;
  case 'project.html':
    projects = 'active';
    break;
  case 'contact.html':
    contact = 'active';
    break;
  default:

}
document.write(`<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="utf-8">
    <title>gyanotech.in</title>
    <meta content="width=device-width, initial-scale=1.0" name="viewport">
    <meta content="" name="keywords">
    <meta content="" name="description">

    <!-- Favicon -->
    <link href="img/logo.png" rel="icon">

    <!-- Google Web Fonts -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Heebo:wght@400;500&family=Roboto:wght@400;500;700&display=swap" rel="stylesheet">

    <!-- Icon Font Stylesheet -->
    <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.10.0/css/all.min.css" rel="stylesheet">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.4.1/font/bootstrap-icons.css" rel="stylesheet">

    <!-- Libraries Stylesheet -->
    <link href="lib/animate/animate.min.css" rel="stylesheet">
    <link href="lib/owlcarousel/assets/owl.carousel.min.css" rel="stylesheet">
    <link href="lib/lightbox/css/lightbox.min.css" rel="stylesheet">

    <!-- Customized Bootstrap Stylesheet -->
    <link href="css/bootstrap.min.css" rel="stylesheet">

    <!-- Template Stylesheet -->
    <link href="css/style.css" rel="stylesheet">
    <link href="css/responsive.css" rel="stylesheet">
    <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>

</head>

<body>
    <div class="container-xxl bg-white p-0">
        <!-- Spinner Start -->
       <div id="spinner" class="show bg-white position-fixed translate-middle w-100 vh-100 top-50 start-50 d-flex align-items-center justify-content-center">
    <div  text-primary" style="width: 3rem; height: 3rem;" role="status">
        <span class="sr-only">Loading...</span>
    </div>
     <div class="loader"></div>
    <img src="img/logo-sticky-top.png" alt="Loading" class="glowing-logo">
</div>
        <!-- Spinner End -->


        <!-- Navbar & Hero Start -->
        <div class="container-xxl position-relative p-0">
            <nav class="navbar navbar-expand-lg navbar-light px-4 px-lg-5 py-3 py-lg-0">
                <a href="index.html" class="navbar-brand p-0">
                    <h1 class="m-0"><img src="`+ logo_path +`" class="" alt="Logo" width="75px"><span class="cp_name">Gyanotech<span class="fs-5"> IT Solutions</span></span></h1>
                </a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                    <span class="fa fa-bars"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarCollapse">
                    <div class="navbar-nav ms-auto py-0">
                        <a href="index.html" class="nav-item nav-link `+ home +`">Home</a>
                        <a href="about.html" class="nav-item nav-link `+ about +`">About</a>
                        <a href="service.html" class="nav-item nav-link `+ services +`">Services</a>
                        <a href="project.html" class="nav-item nav-link `+ projects +`">Projects</a>
                        <!--<div class="nav-item dropdown">
                            <a href="#" class="nav-link dropdown-toggle" data-bs-toggle="dropdown">Pages</a>
                            <div class="dropdown-menu m-0">
                                <a href="team.html" class="dropdown-item">Our Team</a>
                                <a href="testimonial.html" class="dropdown-item">Testimonial</a>
                                <a href="404.html" class="dropdown-item">404 Page</a>
                            </div>
                        </div>-->
                        <a href="contact.html" class="nav-item nav-link `+ contact +`">Contact</a>
                        <a href="https://learn.gyanotech.in" target="_blank" class="nav-item nav-link">Courses</a>
                    </div>
                   <!-- <butaton type="button" class="btn text-secondary ms-3" data-bs-toggle="modal" data-bs-target="#searchModal"><i class="fa fa-search"></i></butaton> -->
                    <!--<a href="https://htmlcodex.com/startup-company-website-template" class="btn btn-secondary text-light rounded-pill py-2 px-4 ms-3">Pro Version</a>-->
                </div>
            </nav>`);
