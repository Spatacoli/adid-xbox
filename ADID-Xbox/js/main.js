// Your code here!
const adid = Windows.System.UserProfile.AdvertisingManager.advertisingId;
const content = document.getElementById("content");

content.innerText = "The ADID is: " + adid;