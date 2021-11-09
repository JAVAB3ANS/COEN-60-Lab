<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8">
        <meta name="author" content="Jason Vu">
        <meta name="description" content="Lab 8: Lists the images files and their storage size using PHP.">
        <title>Lab 8: My Photo Album</title>
        <style>
            body {
                background: lightpink;
            }
            div {
                background: lightblue;
                padding: 25px;
                display: inline-block;
                margin: auto;
                width: 50%;
            }
            h1 {
                font-family: Helvetica;
                border: 5px solid black;
                padding: 10px;
            }
            a, a:visited {
                color: blue;
            }
        </style>
    </head>
    <body>
        <div>
            <h1> My Photo Album </h1> 
            <ul class="photoitem">
                <?php
                    foreach (glob("photo/*.jpg") as $photofile) {
                        $photoname = basename($photofile);
                        $photosize = round((filesize($photofile))/1024);
                        print "<li><a href=\"$photofile\">$photoname</a> ($photosize KB)</li>";
                    }
                ?>
            </ul>
        </div>
    </body>
</html>