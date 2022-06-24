
import './App.css';

function login() {
  return (
    <>
<section class="page-section" id="contact">
<div class="container">
    <div class="text-center">
        <h2 class="section-heading text-uppercase"><img src="assets/img/bz-removebg-preview.png"></img></h2>
        <h3 class="section-subheading text-muted">LOGIN</h3>
    </div>
    {/* <!-- * * * * * * * * * * * * * * *--> */}
    {/* <!-- * * SB Forms Contact Form * *--> */}
    {/* <!-- * * * * * * * * * * * * * * *--> */}
    {/* <!-- This form is pre-integrated with SB Forms.--> */}
    {/* <!-- To make this form functional, sign up at--> */}
    {/* <!-- https://startbootstrap.com/solution/contact-forms--> */}
    {/* <!-- to get an API token!--> */}
    <form id="contactForm" data-sb-form-api-token="API_TOKEN">
        <div class="row align-items-stretch mb-5">
            <div class="col-md-6">
                <div class="form-group">
                    {/* <!-- Name input--> */}
                    <input class="form-control" id="name" type="text" placeholder="Your Name *" data-sb-validations="required" />
                    <div class="invalid-feedback" data-sb-feedback="name:required">A name is required.</div>
                </div>
                <div class="form-group">
                    {/* <!-- Email address input--> */}
                    <input class="form-control" id="email" type="email" placeholder="Your Email *" data-sb-validations="required,email" />
                    <div class="invalid-feedback" data-sb-feedback="email:required">An email is required.</div>
                    <div class="invalid-feedback" data-sb-feedback="email:email">Email is not valid.</div>
                </div>
                <div class="form-group mb-md-0">
                    {/* <!-- Phone number input--> */}
                    <input class="form-control" id="phone" type="password" placeholder="Password *" data-sb-validations="required" />
                    <div class="invalid-feedback" data-sb-feedback="phone:required">A phone number is required.</div>
                </div>
                
            </div>
            </div>
        {/* <!-- Submit Button--> */}
        <div class="text-center"><button type="submit" class="btn btn-primary btn-lg btn-block" href="#home">Submit</button> </div>
    </form>
</div>
</section>
</>
  );
}

export default login;