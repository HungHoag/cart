const name = document.getElementById('name');
const email = document.getElementById('email');
const phone = document.getElementById('phone');
const form = document.getElementById('form');
const mess= document.getElementById('mess');

const name_error = document.getElementById('name_error');

const email_error = document.getElementById('email_error');

const phone_error = document.getElementById('phone_error');

const mess_error = document.getElementById('mess_error');


form.addEventListener('submit',(e)=>
{  
    //dk phone
   var phone_check=/^[0-9\-\+]{9,15}$/;
   //dk email
   var email_check = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;

   //name
   if(name.value === '' || name.value == null)

   {
      e.preventDefault();
      name_error.innerHTML = "Tên không hợp lệ";
   }

   else
   {
      name_error.innerHTML = "";
   }

   //phone
   if(!phone.value.match(phone_check))
   {
   phone_error.innerHTML="SĐT không hợp lệ"
   }else
   {
   phone_error.innerHTML="";
   }

   //email
   if(!email.value.match(email_check))
   {
      e.preventDefault();
      email_error.innerHTML = "Email không hợp lệ";

   }
   else 
   {
      email_error.innerHTML = "";
   } 
      

})
