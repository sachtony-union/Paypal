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
			client.Headers.Add("authorization", "Bearer A21AAFJ9eoorbnbVH3fTJrCTl2o7-P_1T6q8vdYB_QwBB9Ais5ZZmJD4BsNjIiOh8j8OyOcfzLO1BKcgKe0pK-mntpk6jOm-g");
			client.Headers.Add("accept-language", "en_US");
			client.Headers.Add("content-type", "application/json");
			client.Headers.Add("accept", "application/json");

			var body = @"{
				  ""intent"": ""CAPTURE"",
				  ""purchase_units"": [
				    {
				      ""reference_id"": ""PUHF"",
				      ""amount"": {
				        ""currency_code"": ""USD"",
				        ""value"": ""100.00""
				      }
				    }
				  ],
				  ""application_context"": {
				    ""return_url"": """",
				    ""cancel_url"": """"
				  }
				}";

			try
			{
				var response = client.UploadString("https://api.paypal.com/v2/checkout/orders", "POST", body);
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
