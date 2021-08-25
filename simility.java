package com.sachtony.androidintegratiodemo;
 
import android.app.Activity;
import android.os.Bundle;
 
// Import SimilityScript and SimilityContext
import com.simility.recon.SimilityScript;
import com.simility.recon.SimilityContext;
 
public class MainActivity extends Activity {
 
  @Override
    protected void onCreate(Bundle savedInstanceState) {
      super.onCreate(savedInstanceState);
      setContentView(R.layout.activity_main);
      // Construct a valid SimilityContext
      SimilityContext similityContext = new SimilityContext();
      similityContext.setApplicationContext(getApplicationContext());
      similityContext.setCustomerId("5e295f6c-5fd2-11e7-907b-a6006ad3dba0"); // replace  with unique identifier assigned by Simility. This will be provided to you during signup.
      similityContext.setSessionId("your.session.id.variable"); //replace with sessionID variable
      similityContext.setUserId("your.user.id.variable"); //replace with userID variable
      similityContext.setEventTypes("payment_initiate"); // Comma separated snake_case string of action/event which is associated with this activity/view.
      similityContext.setZone("us"); // Default: "us". If data regulatory compliance requires your data to be hosted in Europe datacenters, please specify zone as "eu" 
 
      // Execute SimilityScript
      SimilityScript.getInstance().execute(similityContext);
    }
}
