package com.example.rockpaperscissors;

import androidx.appcompat.app.AppCompatActivity;

import android.content.Intent;
import android.os.Bundle;
import android.view.View;

public class MainActivity extends AppCompatActivity {

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);
    }
    //parent="Theme.AppCompat.Light.NoActionBar"

    public void  help(View v) {
        Intent i = new Intent(this, HelpArea.class);

        startActivity(i);
    }

    public void start(View v) {
        //Function loads into a new activity which hosts the game

        Intent i = new Intent(this, GameCheck.class);

        startActivity(i);
    }

    public void quit(View v) {
        //Function ends the app
       // System.exit(0);
    }


}