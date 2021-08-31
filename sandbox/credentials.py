from paypalcheckoutsdk.core import PayPalHttpClient, SandboxEnvironment


# Creating Access Token for Sandbox
client_id = "<<PAYPAL-CLIENT-ID>>"
client_secret = "<<PAYPAL-CLIENT-SECRET>>"
# Creating an environment
environment = SandboxEnvironment(client_id=client_id, client_secret=client_secret)
client = PayPalHttpClient(environment)
