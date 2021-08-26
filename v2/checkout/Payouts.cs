using System;
using System.IO;
using System.Net;

namespace PayPal
{
	class PayPalAPI
	{
		static void Main(string[] args)
		{
			var client = new WebClient();
			client.Headers.Add("authorization", "basic QVZp**********RFY=");
			client.Headers.Add("content-type", "application/x-www-form-urlencoded");
			client.Headers.Add("accept-language", "en_US");
			client.Headers.Add("accept", "application/json");

			var body = "grant_type=client_credentials";

			try
			{
				var response = client.UploadString("https://api.sandbox.paypal.com/v1/oauth2/token", "POST", body);
				Console.WriteLine(response);

				// Keep the console window open in debug mode.
				Console.ReadKey();
			}
			catch(WebException e)
			{
				var errorResponse = e.Response as HttpWebResponse;
				Console.WriteLine(e.Response.Headers);
				string responseText;
				using (var reader = new StreamReader(errorResponse.GetResponseStream()))
				{
					responseText = reader.ReadToEnd();
					Console.WriteLine(responseText);
				}
				// Keep the console window open in debug mode.
				Console.ReadKey();
			}
		}
	}
}
