function adduser(){
    p1_name = document.getElementById("player1_input").value;
    p2_name = document.getElementById("player2_input").value;
    localStorage.setItem("player1_key", p1_name);
    localStorage.setItem("player2_key", p2_name);
    window.location = "quiz_game_page.html";
}


