/*Add the JavaScript here for the function billingFunction().  It is responsible for setting and clearing the fields in Billing Information */
function billingFunction()
{
		if (document.getElementById('same').checked)
    {
       // save current shipping info in variables
       var shippingName = document.getElementById("shippingName").value
       var shippingZip = document.getElementById("shippingZip").value

       // assign billing info shipping info
       document.getElementById("billingName").value = shippingName
       document.getElementById("billingZip").value = shippingZip
		}
    else
    {
      // if unchecked keep info blank
      document.getElementById("billingName").value = ''
      document.getElementById("billingZip").value = ''
    }

}
