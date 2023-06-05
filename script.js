

// indexpage


/* Nå i starten skal vi bruke console.log for å se resultatet av det vi gjør i JavaScript. Under finner du et eksempel på hvordan du med en tekstboks (prompt) kan skriver inn en variabel til programmet. Og hvordan du med en (alert) skriver ut resultatet til programmet. */

/* Lager en tekstboks som spør brukeren hva han eller hun heter.
   Vi lagrer navnet i variabelen navn */
   var navn = prompt("Hei, hva heter du?");

   console.log(navn);
   // Lager en beskjedboks som skriver en hilsen til brukeren
   alert("Hei på deg " + navn + "!");


//    

   
{/* <script  */}

// type="text/javascript">

    function sumValues() {
        var text_number_1uwu, text_number_2, text_number_3, text_number_4, text_number_5, text_number_6, text_result;

        text_number_1uwu = Number(document.formcalc.text_number_1uwu.value);
        text_number_2 = Number(document.formcalc.text_number_2.value);
        text_number_3 = Number(document.formcalc.text_number_3.value);
        text_number_4 = Number(document.formcalc.text_number_4.value);
        text_number_5 = Number(document.formcalc.text_number_5.value);
        text_number_6 = Number(document.formcalc.text_number_6.value);

        text_result = (text_number_1uwu + text_number_2 + text_number_3 + text_number_4 + text_number_5 + text_number_6)/6
            // + text_number_2 + text_number_2 + text_number_2 + text_number_2 + text_number_2;
        document.formcalc.text_result.value = text_result

        // if you dont want to multiply just copy "+ text_number_2" twice and paste it infront of "text_result ="

    }
// </script>