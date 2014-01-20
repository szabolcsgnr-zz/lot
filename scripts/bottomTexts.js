//alul valtoztatja a szovegeket
function whatsThis()
{
document.getElementById("menuSelected").innerHTML="Biztos hallottál már arról, hogy alakultak lottózó baráti társaságok, akik úgy\ növelték nyerési esélyeiket, hogy összebeszéltek, hogy különböző számokat játszanak meg.\
Ennek az oldalnak a célja, hogy feltöltsd, hogy milyen számokat játszol meg, illetve\
ellenőrizni tudd, hogy más, játszotta-e már meg ezt a számsort, így növelve az \
éltalotok kiválasztott számok nyerési esélyét";
}
function howTo()
{
document.getElementById("menuSelected").innerHTML="Annyit kell tenned, hogy a megjátszani kívánt számot beírod a tipp mezőbe. Ha az\
ellenőrzésre kattintasz, ellenőrizheted, hogy a felhasználóink közül adta-e már fel\
valaki a megadott szám kombinációt. Ha nem, és megjátszod akkor rákattinthatsz\
a megjátszás lehetőségre, ezzel név nélkül elküldve a hetente frissülő adatbázisunkba\
a tipped, hogy segíts másoknak, nehogy ugyanazt a számsort játszák meg. \
Ha nem akarsz tippelni, generálhatsz is egy random kombinációt, amiről biztos lehetsz,\
hogy a felhasználóink tippjeitől eltérő, egyedi.";
}
function felt()
{
document.getElementById("menuSelected").innerHTML="Az oldal használata teljesen ingyenes. A tippek beküldése önkéntes, anonim. Az\ oldal\
felületén egy reklám van elhelyezve, amely az oldal üzemeltetésének a költségeit fedezi.\
Ezen felül, ha tetszik az oldal támogathatod az oldal készítőjét, ezzel is segítve az oldal\
zavartalan működését, terjesztését.";
}
function nothing(){
	document.getElementById("menuSelected").innerHTML="";
}