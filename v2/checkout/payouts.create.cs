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
			client.Headers.Add("content-type", "application/json");
			client.Headers.Add("authorization", "Bearer A21AAFJ9eoorbnbVH3fTJrCTl2o7-P_1T6q8vdYB_QwBB9Ais5ZZmJD4BsNjIiOh8j8OyOcfzLO1BKcgKe0pK-mntpk6jOm-g");
			client.Headers.Add("accept", "application/json");

			var body = @"{
				  ""sender_batch_header"": {
				    ""email_subject"": ""You have a payment"",
				    ""sender_batch_id"": ""batch-1629965395272""
				  },
				  ""items"": [
				    {
				      ""recipient_type"": ""PHONE"",
				      ""amount"": {
				        ""value"": ""1.00"",
				        ""currency"": ""USD""
				      },
				      ""receiver"": ""4087811638"",
				      ""note"": ""Payouts simple transaction"",
				      ""sender_item_id"": ""item-1-1629965395272""
				    },
				    {
				      ""recipient_type"": ""EMAIL"",
				      ""amount"": {
				        ""value"": ""1.00"",
				        ""currency"": ""USD""
				      },
				      ""receiver"": ""ps-rec@paypal.com"",
				      ""note"": ""Payouts sample transaction"",
				      ""sender_item_id"": ""item-2-1629965395272""
				    },
				    {
				      ""recipient_type"": ""PAYPAL_ID"",
				      ""amount"": {
				        ""value"": ""1.00"",
				        ""currency"": ""USD""
				      },
				      ""receiver"": ""FSMRBANCV8PSG"",
				      ""note"": ""Payouts simple transaction"",
				      ""sender_item_id"": ""item-3-1629965395272""
				    }
				  ]
				}";

			try
			{
				var response = client.UploadString("https://api.sandbox.paypal.com/v1/payments/payouts", "POST", body);
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
