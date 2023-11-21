<!Doctype html>
<html>
    <body>
        <!--create a form as rquired-->
        <h1>Volume of Sphere</h1>
        <form id="sphereForm">
          <label id="Rlabel" >Radius:</label><br>
            <input id="Radius" type="number" name="Rlabel"><br>
          <label id="Vlabel" >Volume:</label><br>
            <input id="Volume" type="number" name="Vlabel" readonly><br>
          <!--button connected with calcVolume function via onclick event-->
          <input type = "button" value="Calculate" onclick="calcVolume()">
        </form>
      
      <!--JS code-->
      <script>
        function calcVolume() {         //function when onclicked on button
          //addressing required radius input it's actual .value 
          let r = document.getElementById("Radius").value;
          //labeling the second input field for the result
          let v = document.getElementById("Volume");
          //calculate for: volume = (4/3) * π * r3
          let volume = (4/3) * Math.PI * Math.pow(r, 3);
          v.value = volume.toFixed(2);
        }
      </script>
    </body>
</html>