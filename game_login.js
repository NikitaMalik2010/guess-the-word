function adduser()
{
    player_1name=document.getElementById("p1id").value;
    player_2name=document.getElementById("p2id").value;
    localStorage.setItem("player1_name",player_1name);
    localStorage.setItem("player2_name",player_2name);
    window.location="game_page.html";
}