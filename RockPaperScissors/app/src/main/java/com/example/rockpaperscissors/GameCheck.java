package com.example.rockpaperscissors;

import androidx.appcompat.app.AppCompatActivity;

import android.os.Bundle;
import android.view.View;
import android.widget.TextView;
import android.widget.Toast;

public class GameCheck extends AppCompatActivity {
    Boolean check = false;

    //Functionality to check AI choice for 1-3
    int min = 0;
    int max = 2;

    //The score count
    int score = 0;
    String scoreO = "";

    //AI score
    int aiScore = 0;
    String aiScoreO = "";

    //Draw count
    int draw = 0;
    String drawScore = "";

    double lottoNumber;
    String aiChoice;

    //Array for the COM to choose option
    String[] selection = {"Rock", "Paper", "Scissor"};

    String aiOutput = "A.I. Chose ";

    String lChoice = "Your last choice: ";
    

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_game_check);

    }

    //This function is called when the user clicks the Rock button, and this moves to the procedure to
    //work the right code.
    public void rockMove(View v) {
        //Calls function to calculate outcome of AivP
        checkAIvP("Rock");

        //Updates AI last move
        String aiO = aiOutput + aiChoice + " last round.";
        ((TextView)findViewById(R.id.txtViewer)).setText(aiO);

        //Updates players last move
        String newA = lChoice + "Rock";
        ((TextView)findViewById(R.id.txtLChoice)).setText(newA);

        //Rolls AI new move for next round
        lottoNumber = Math.random()*(max-min+1)+min;
        aiChoice = selection[(int)lottoNumber];


    }

    //This function is called when the user clicks the Paper button, and this moves to the procedure to
    //work the right code.
    public void paperMove(View v) {
        //Calls function to calculate outcome of AivP
        checkAIvP("Paper");

        //Updates AI last move
        String aiO = aiOutput + aiChoice + " last round.";
        ((TextView)findViewById(R.id.txtViewer)).setText(aiO);

        //Updates players last move
        String newA = lChoice + "Paper";
        ((TextView)findViewById(R.id.txtLChoice)).setText(newA);

        //Rolls AI new move for next round
        lottoNumber = Math.random()*(max-min+1)+min;
        aiChoice = selection[(int)lottoNumber];
    }

    //This function is called when the user clicks the Scissor button, and this moves to the procedure to
    //work the right code.
    public void scissorMove(View v) {
        //Calls function to calculate outcome of AivP
        checkAIvP("Scissor");

        //Updates AI last move
        String aiO = aiOutput + aiChoice + " last round.";
        ((TextView)findViewById(R.id.txtViewer)).setText(aiO);

        //Updates players last move
        String newA = lChoice + "Scissor";
        ((TextView)findViewById(R.id.txtLChoice)).setText(newA);

        //Rolls AI new move for next round
        lottoNumber = Math.random()*(max-min+1)+min;
        aiChoice = selection[(int)lottoNumber];

    }

    //Sets up the game to be played when the player clicks the start button.
    //Many buttons and textview are revealed when clicked.
    public void start(View v) {
        //Initialises AI first choice
        lottoNumber = Math.random()*(max-min+1)+min;
        aiChoice = selection[(int)lottoNumber];

        //Opening statement
        String o = "The A.I. will choose between Rock, Paper Scissor.";
        ((TextView)findViewById(R.id.txtViewer)).setText(o);

        //All required buttons now visible
        findViewById(R.id.btnPlay).setVisibility(View.GONE);
        findViewById(R.id.btnRock).setVisibility(View.VISIBLE);
        findViewById(R.id.btnPaper).setVisibility(View.VISIBLE);
        findViewById(R.id.btnScissor).setVisibility(View.VISIBLE);

        //Last choice for player now visible
        findViewById(R.id.txtLChoice).setVisibility(View.VISIBLE);

        //Makes the score count visible to the player
        scoreO = "Score: " + score;
        findViewById(R.id.txtScore).setVisibility(View.VISIBLE);
        ((TextView)findViewById(R.id.txtScore)).setText(scoreO);

        //Makes the ai score count visible to the player
        aiScoreO = "AI Score: " + aiScore;
        findViewById(R.id.txtScoreAI).setVisibility(View.VISIBLE);
        ((TextView)findViewById(R.id.txtScoreAI)).setText(aiScoreO);

        //Makes the draw count visible to the player
        drawScore= "Draw: " + draw;
        findViewById(R.id.txtDraw).setVisibility(View.VISIBLE);
        ((TextView)findViewById(R.id.txtDraw)).setText(drawScore);
    }

    //Functionality checks whether the AI or the player won or if they drew.
    public void checkAIvP(String pChoice) {
        String AI = aiChoice;
        if (pChoice.equals(AI))
        {
            //Outcome is a draw
            Toast.makeText(this, "Draw", Toast.LENGTH_LONG).show();
            draw ++;
            drawScore = "Draw: " + draw;
            ((TextView)findViewById(R.id.txtDraw)).setText(drawScore);

        } else if (((pChoice.equals("Rock")) && (AI.equals("Scissor"))) || ((pChoice.equals("Scissor")) && (AI.equals("Paper"))) || ((pChoice.equals("Paper")) && (AI.equals("Rock"))))
        {
            //Outcome is player won
            Toast.makeText(this, "You Won", Toast.LENGTH_LONG).show();
            score ++;
            scoreO = "Score: " + score;
            ((TextView)findViewById(R.id.txtScore)).setText(scoreO);

        } else if (((pChoice.equals("Scissor")) && (AI.equals("Rock"))) || ((pChoice.equals("Paper")) && (AI.equals("Scissor"))) || ((pChoice.equals("Rock")) && (AI.equals("Paper"))))
        {
            //Outcome is the ai won
            Toast.makeText(this, "You Lost", Toast.LENGTH_LONG).show();
            aiScore ++;
            aiScoreO = "AI Score: " + aiScore;
            ((TextView)findViewById(R.id.txtScoreAI)).setText(aiScoreO);

        } else {

            Toast.makeText(this, "Unexpected Outcome", Toast.LENGTH_LONG).show();

        }

    }

}