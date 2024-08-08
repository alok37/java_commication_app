
    const updateUser = () => {
        alert("AAA");

        const searchParams = new URLSearchParams(window.location.search);
        console.log(searchParams); // true

        alert("AAABBBB");
        // debugger;
        var checkStr = '';
        var luserexist = 0;
        var checkFlag = 0;
        var login_id = '';
        var fullname = '';
        var loginId = '';
        const email = document.getElementById("email").value.trim();
        if( email == ''){
            checkStr += '\n Please enter email';
            checkFlag = 1;
        }else{
            filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
            if (filter.test(email)) {
                //
            }
            else
            {
                checkStr += '\n Please enter valid email';
                checkFlag = 1;
            }
            document.getElementById('email').value=email; 
        }

        const fullname1 = document.getElementById("fullname").value.trim();
        if( fullname1 == ''){
            checkStr += '\n Please enter fullname';
            checkFlag = 1;
        }
        if( checkFlag != 1){
            if (localStorage.getItem("users") === null) {
                //
            }else{
                var chk_users1 = JSON.parse(localStorage.getItem("users"));
                if(chk_users1 === null ) {
                        //
                }else{                          
                    for (var i = 0; i < chk_users1.length; i++) {
                        const chkEmail = chk_users1[i].email;
                        const chkPassword = chk_users1[i].password;
                        const chkId = chk_users1[i].id;                  
                        if( chkEmail == email && chkPassword == password ){
                            luserexist = 1;
                            login_id = chk_users1[i].id;
                            fullname  = chk_users1[i].fullname;
                            loginId  = chk_users1[i].id;
                        }
                            
                    }
                }
            }
        }
        if( luserexist == 1){           
            if (localStorage.getItem("login_user") === null) {
                var login_user = localStorage.getItem("login_user") ? JSON.parse(localStorage.getItem("login_user")) : [];
                var logedUser = {
                    id: login_id,
                    fullname: fullname,
                    email: email,
                    password: password
                }
                login_user.push(logedUser);
                localStorage.setItem("login_user", JSON.stringify(login_user));
            }else{
                localStorage.removeItem("login_user");
                var login_user = localStorage.getItem("login_user") ? JSON.parse(localStorage.getItem("login_user")) : [];
                var logedUser = {
                    id: login_id,
                    fullname: fullname,
                    email: email,
                    password: password
                }
                login_user.push(logedUser);
                localStorage.setItem("login_user", JSON.stringify(login_user));
            }
        }else{
            if( checkStr == '' ){
                alert("There is no proper authentication given.");
            }else{
                alert(checkStr);
            }
            
            return false;
        }
        return true;
    }

    document.getElementById('editUser').addEventListener('submit', function (event) {
        event.preventDefault()
        if ((updateUser())) {
           // window.location.href = "login_success.html";
        }

    });    

