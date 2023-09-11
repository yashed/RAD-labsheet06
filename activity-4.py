from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.chrome.service import Service
from webdriver_manager.chrome import ChromeDriverManager
from faker import Faker
import time

# initiate faker
fake = Faker()

# open link in chrome browser
driver = webdriver.Chrome(service=Service(ChromeDriverManager().install()))
driver.get("https://technotrail.site")

# click on register link
register_link = driver.find_element(By.LINK_TEXT, "Register")
register_link.click()
time.sleep(3)

# fill out the form
name = fake.name()
email = fake.email()
password = "123456789"

name_txt = driver.find_element(By.ID, "name")
name_txt.send_keys(name)

email_txt = driver.find_element(By.ID, "email")
email_txt.send_keys(email)

password_txt = driver.find_element(By.ID, "password")
password_txt.send_keys(password)

confirm_password_txt = driver.find_element(By.ID, "password_confirmation")
confirm_password_txt.send_keys(password)

# submit register form
register_btn = driver.find_element(By.XPATH, '//html/body/div[1]/div/div[2]/form/div[5]/button')
register_btn.click()
time.sleep(3)

print(f"Name: {name}")
print(f"Email: {email}")
print(f"Password: {password}")

driver.close()

print("sample test case successfully completed")
