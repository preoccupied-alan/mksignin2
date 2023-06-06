import random
import string
import time

# Function to generate a random password
def generate_password():
    length = 6
    letters = string.ascii_uppercase
    return ''.join(random.choice(letters) for _ in range(length))

# Function to export password to file
def export_password(password):
    with open('password.txt', 'w') as file:
        file.write(password)

# Main script
while True:
    # Generate a new password
    password = generate_password()

    # Export password to file
    export_password(password)

    # Sleep for 5 minutes
    time.sleep(300)
