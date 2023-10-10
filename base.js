const username= document.getElementById('username')
const Email =document.getElementById('Email')
const mobileNo =document.getElementById('mobileNo')
const Address= document.getElementById('Address')
const suggestion = document.getElementById('suggestion')

function Is_Validate()
{
    const username= document.getElementById('username')
    const Email =document.getElementById('Email')
    const mobileNo =document.getElementById('mobileNo')
    const Address= document.getElementById('Address')
    const suggestion = document.getElementById('Suggestion')

    //Validate form 
    //Basic
    if(username.value == ""){
        alert("Please Enter Username")
        return false;
    }
    else if(Email.value == "")
     {
        alert("Please Enter your email")
        return false;
        }
        else  if(mobileNo.value==""){
            alert('enter your phone Number')
            return false;
        }
        else if(Address.value=="")
        {
            alert('please Enter your address')
            return false;
        }
        else if(suggestion.value==""){
            alert('Enter Your Suggestion');
            return false;
        }
        else{
            alert('Form Submitted Successfully!')
            const data={};
            data['username']=username.value,
            data['Email'] =Email.value ,
            data['mobileNo']=mobileNo.value,
            data['Address']=Address.value,
            data['suggestion']=suggestion.value
            console.log(data)
            return true;
        }
}
