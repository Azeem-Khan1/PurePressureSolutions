// Appointment form

$(document).ready(function () {
    $("#contact_form")
        .bootstrapValidator({
            feedbackIcons: {
                valid: "glyphicon glyphicon-ok",
                invalid: "glyphicon glyphicon-remove",
                validating: "glyphicon glyphicon-refresh",
            },
            fields: {
                first_name: {
                    validators: {
                        stringLength: {
                            min: 2,
                        },
                        notEmpty: {
                            message: "Please enter your first name",
                        },
                    },
                },
                last_name: {
                    validators: {
                        stringLength: {
                            min: 2,
                        },
                        notEmpty: {
                            message: "Please enter your last name",
                        },
                    },
                },
                email: {
                    validators: {
                        notEmpty: {
                            message: "Please enter your email address",
                        },
                        emailAddress: {
                            message: "Please enter a valid email address",
                        },
                    },
                },
                phone: {
                    validators: {
                        notEmpty: {
                            message: "Please enter your phone number",
                        },
                        phone: {
                            country: "US",
                            message:
                                "Please enter a vaild phone number with area code",
                        },
                    },
                },
                address: {
                    validators: {
                        stringLength: {
                            min: 8,
                        },
                        notEmpty: {
                            message: "Please enter your street address",
                        },
                    },
                },
                city: {
                    validators: {
                        stringLength: {
                            min: 4,
                        },
                        notEmpty: {
                            message: "Please enter your city",
                        },
                    },
                },
                state: {
                    validators: {
                        notEmpty: {
                            message: "Please select your state",
                        },
                    },
                },
                zip: {
                    validators: {
                        notEmpty: {
                            message: "Please enter your zip code",
                        },
                        zipCode: {
                            country: "US",
                            message: "Please enter a vaild zip code",
                        },
                    },
                },
                comment: {
                    validators: {
                        stringLength: {
                            min: 10,
                            max: 999,
                            message:
                                "Please enter at least 10 characters and no more than 999",
                        },
                        notEmpty: {
                            message:
                                "Please enter a brief description of what service you'd like",
                        },
                    },
                },
            },
        })
        .on("success.form.bv", function (e) {
            $("#success_message").slideDown({ opacity: "show" }, "slow"); // Do something ..
        });
});


// Hiding the mobile navbar other than using the toggle button

document.addEventListener("DOMContentLoaded", function () {
    var navbar = document.querySelector('.navbar');
    var collapseDiv = document.querySelector('.collapse');

    // This allows user to "click out of" the nav dropdown
    document.addEventListener('click', function (event) {
        var isClickInsideNavbar = navbar.contains(event.target);

        if (!isClickInsideNavbar && collapseDiv.classList.contains('in')) {
            // Check if the collapse div is currently expanded
            document.querySelector(".navbar-toggler").click();
        }
    });

    const navItems = document.querySelectorAll('.nav-item');
    // Hide nav dropdown after using it
    navItems.forEach((navItem) => {
        navItem.addEventListener('click', () => {
            if (collapseDiv.classList.contains('in')) {
                document.querySelector(".navbar-toggler").click();
            }
        });
    });

});
            