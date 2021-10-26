// Welcome to the iPodBlog! This blog was created to talk about
// using ipods in 2021.

// Basic setup and custimization
changeCSS('assets/stylesheets/custom.css')
aboutheader("<center>MonoPod<br><br><img src='ipod.jpg' width='20%' style='border-radius: 2px;'></center>")
aboutme("<center>MonoPod is a blog all about using iPods in 2021 and how to get music on them!</center>")
blogname("MonoPod")
tabtitle("MonoPod")
footer("&copy; <a href='https://github.com/brodyking' style='text-decoration: none;'>Brody King</a>; All Rights Reserved. Last updated 10/25/2021")

// Pages
var links = "If you are looking for links to all the software I link to download, check out the google drive <a href='#'>here</a>"
createpage('links', links)

// Blog Posts
createpost("An Introduction", "Welcome to MonoPod! This is a website I made (with quickblog.js) that is all ipod related. I use a iPod for almost all my music and if you are interested in buying, setting up, and using ipods then you found the right site! I will update this website around twice a week with information that I have found along the way while using a iPod in 2021.","10/25/2021")