function sendEmail() {
    			var str="name:  " + document.forms.request-form.firstName.value + "\n" + "email:  " + document.forms.request-form.email.value + "\n" + "phone:  " + document.forms.request-form.phone.value;
    			var link = document.getElemetByID("mylink");
    			link.href="/mailto:emilya@auntieemsinc.com?subject=form price&estimage&request=" + str;
    			clickLink(link);
    				return false;
    		}