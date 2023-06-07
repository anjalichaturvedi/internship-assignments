from selenium import webdriver
from selenium.webdriver.support.ui import Select
from PIL import Image
import pytesseract
import time

# Specify the path to your web driver executable
webdriver_path = 'path_to_webdriver'

# Specify the path to Tesseract OCR executable
pytesseract.pytesseract.tesseract_cmd = 'path_to_tesseract'

# Create a new instance of the Chrome driver
driver = webdriver.Chrome(webdriver_path)

# Navigate to the website
driver.get('httpsceoelection.maharashtra.gov.insearchlist')

# Select District (User Input)
district_value = input(Enter the District )

district_dropdown = Select(driver.find_element_by_id('ddDistrict'))
district_dropdown.select_by_visible_text(district_value)

# Select Assembly Constituency - Select Any
assembly_dropdown = Select(driver.find_element_by_id('ddAssembly'))
assembly_dropdown.select_by_index(1)

# Type of Revision - SSR 2023
revision_dropdown = Select(driver.find_element_by_id('ddRevisionType'))
revision_dropdown.select_by_visible_text('SSR 2023')

# Language of E-Rolls - Marathi
language_dropdown = Select(driver.find_element_by_id('ddLanguage'))
language_dropdown.select_by_visible_text('Marathi')

# Select Part - Select Any
part_dropdown = Select(driver.find_element_by_id('ddPart'))
part_options = part_dropdown.options[1]

# Download PDFs for each part
for part_option in part_options
    part_number = part_option.text
    part_option.click()

    # Extract Captcha image source
    captcha_image_src = driver.find_element_by_id('CaptchaImage').get_attribute('src')
    driver.execute_script(window.open('');)  # Open a new tab
    driver.switch_to.window(driver.window_handles[1])  # Switch to the new tab
    driver.get(captcha_image_src)  # Open Captcha image in the new tab

    # Save the Captcha image
    captcha_image_path = f'captcha_{part_number}.png'
    with open(captcha_image_path, 'wb') as image_file
        image_file.write(driver.find_element_by_tag_name('img').screenshot_as_png)

    # Perform OCR on the Captcha image to extract the text
    captcha_text = pytesseract.image_to_string(Image.open(captcha_image_path)).strip()

    # Enter Captcha
    captcha_input = driver.find_element_by_id('txtCaptcha')
    captcha_input.clear()
    captcha_input.send_keys(captcha_text)

    # Click on 'Open PDF' to download
    driver.find_element_by_id('btnOpenPDF').click()

    # Handle the file download, wait for the file to be downloaded, or use browser preferences to specify the download location

    # Wait for the download to complete
    time.sleep(5)

    driver.close()  # Close the Captcha image tab
    driver.switch_to.window(driver.window_handles[0])  # Switch back to the main tab

# Close the driver
driver.quit()
