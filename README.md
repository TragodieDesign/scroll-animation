<!--USEFUL APLICATION
This is an aplication to make the front end animation easiest just following this steps
In your HTML, add <script src="js/script.js"></script>
Insert 'data-anime="left, right, etc" in a html div or tag to call this function
The direction you will insert must be left,right, bottom or top
Add this script to your css file.

=========================================================================

[data-anime]{
  opacity: 0;
  transition: .3s;
}
[data-anime="left"]{
  transform: translate3d(-50px, 0, 0);
}
[data-anime="right"]{
  transform: translate3d(50px, 0, 0);
}
[data-anime="top"]{
  transform: translate3d(0px, -50px, 0);
}
[data-anime="bottom"]{
  transform: translate3d(0px, 50px, 0);
}
[data-anime].animate{
  opacity:1;
  transform: translate3d(0px, 0, 0);
}

-->
