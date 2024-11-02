from selenium import webdriver
from selenium.webdriver.common.by import By
import os
import requests

# Set up the Selenium WebDriver
driver = webdriver.Chrome()

# Navigate to the Facebook group page
driver.get("https://www.facebook.com/groups/389107497817536")

# Find and extract the image elements
image_elements = driver.find_elements(By.TAG_NAME, "img")

# Create the 'group_images' directory if it doesn't exist
if not os.path.exists('group_images'):
    os.makedirs('group_images')

# Download and save the images
for i, image_element in enumerate(image_elements):
    image_url = image_element.get_attribute("src")
    filename = f"group_image_{i}.jpg"
    file_path = os.path.join("group_images", filename)

    # Download and save the image using the requests library
    response = requests.get(image_url)
    with open(file_path, 'wb') as file:
        file.write(response.content)

    print(f"Downloaded image: {filename}")

# Close the browser
driver.quit()