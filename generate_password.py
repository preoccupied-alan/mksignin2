import random
import time
import RPi.GPIO as GPIO

# GPIO pins configuration
DISPLAY_PINS = [11, 13, 15, 16]  # GPIO pins connected to the display segments

# Password display patterns for each digit (0-9)
DISPLAY_PATTERNS = [
    [1, 1, 1, 1, 1, 1, 0],  # 0
    [0, 1, 1, 0, 0, 0, 0],  # 1
    [1, 1, 0, 1, 1, 0, 1],  # 2
    [1, 1, 1, 1, 0, 0, 1],  # 3
    [0, 1, 1, 0, 0, 1, 1],  # 4
    [1, 0, 1, 1, 0, 1, 1],  # 5
    [1, 0, 1, 1, 1, 1, 1],  # 6
    [1, 1, 1, 0, 0, 0, 0],  # 7
    [1, 1, 1, 1, 1, 1, 1],  # 8
    [1, 1, 1, 1, 0, 1, 1]   # 9
]

def display_password(password):
    digits = [int(digit) for digit in str(password).zfill(4)]

    # Turn off all display segments
    GPIO.output(DISPLAY_PINS, GPIO.HIGH)

    # Display each digit sequentially
    for i in range(4):
        digit = digits[i]
        pattern = DISPLAY_PATTERNS[digit]

        # Turn on the segments of the current digit
        for j in range(7):
            GPIO.output(DISPLAY_PINS[j], pattern[j])

        # Delay to display the digit
        time.sleep(0.001)

        # Turn off the segments of the current digit
        GPIO.output(DISPLAY_PINS, GPIO.HIGH)

# GPIO setup
GPIO.setmode(GPIO.BOARD)
GPIO.setup(DISPLAY_PINS, GPIO.OUT)

# Generate initial password
password = random.randint(1000, 9999)
display_password(password)

# Periodically generate and update the password every hour
while True:
    password = random.randint(1000, 9999)
    display_password(password)
    time.sleep(3600)  # Sleep for 1 hour
