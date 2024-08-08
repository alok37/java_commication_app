    const registervalidate = () => {
        //debugger;
        var checkFlag = 0;
        var checkStr = '';
        
        const fullname = document.getElementById("fullname").value.trim();
        if( fullname == ''){
            checkStr += '\n Please enter fullname';
            checkFlag = 1;
        }
        
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
            // document.getElementById('email').value=email; 
        }
       
        if (localStorage.getItem("users") == null) {
            //
        }else{
            var chk_users = JSON.parse(localStorage.getItem("users"));
            var userexist = 0;
            if(chk_users === null ) {
                    //
            }else{                          
                for (var i = 0; i < chk_users.length; i++) {
                    if(chk_users[i].email == email ){
                        userexist = 1;
                    }
                }
            }
        }

        if( userexist == 1 ){
            checkStr += "\n Email id :" + email + " already exists.";
            checkFlag = 1;
        } 
               
        const password = document.getElementById("password").value.trim();
        if( password == ''){
            checkStr += '\n Please enter password';
            checkFlag = 1;
        }else{
            const confirm_password = document.getElementById("confirm_password").value.trim();
            if( confirm_password == ''){
                checkStr += '\n Please enter confirm_password';
                checkFlag = 1;
            }else{
                const plength = password.length;
                if( plength < 8 ){
                    checkStr += '\n Please enter password upto 8 characters';
                    checkFlag = 1;
                }
                if( password != confirm_password ){
                    checkStr += '\n Please enter same password and confirm_password';
                    checkFlag = 1;
                }
            }
        }



        // Start to user listing
        if( checkFlag != 1 ){
            var users = localStorage.getItem("users") ? JSON.parse(localStorage.getItem("users")) : [];
            var user = {
                id: Number(new Date()),
                fullname: fullname,
                email: email,
                password: password
            }
            users.push(user);
            localStorage.setItem("users", JSON.stringify(users));
            //console.log("user:"+users);
            
            //alert("users:" + JSON.stringify(users) );
            alert(" Added successfully." );
            window.location.href = "registration_success.html";
           // return true;
        }else{
            alert("Required:" +checkStr );
        }   
        // End to user listing
    }
    
    if(document.getElementById('registerUser')){
        document.getElementById('registerUser').addEventListener('submit', function (event) {
            event.preventDefault()
            if ((registervalidate())) {
                window.location.href = "registration_success.html";
            }
    
        });
    
    }
   
    const validateLogin = () => {
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

        const password = document.getElementById("password").value.trim();
        if( password == ''){
            checkStr += '\n Please enter password';
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

    document.getElementById('loginUser').addEventListener('submit', function (event) {
        event.preventDefault()
        if ((validateLogin())) {
            window.location.href = "login_success.html";
        }

    });    

