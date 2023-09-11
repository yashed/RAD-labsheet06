from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.chrome.service import Service
from webdriver_manager.chrome import ChromeDriverManager
from selenium.webdriver.support.ui import Select
import time

# open link in chrome browser
driver = webdriver.Chrome(service=Service(ChromeDriverManager().install()))
driver.get("https://www.saucedemo.com")

# fill out the form
username = "standard_user"
password = "secret_sauce"

username_txt = driver.find_element(By.ID, "user-name")
username_txt.send_keys(username)

password_txt = driver.find_element(By.ID, "password")
password_txt.send_keys(password)

# submit register form
login_btn = driver.find_element(By.ID, 'login-button')
login_btn.click()
time.sleep(3)

# find the filter
filter = Select(driver.find_element(By.XPATH, "/html/body/div[1]/div/div/div[1]/div[2]/div/span/select[@data-test='product_sort_container']"))
filter.select_by_value("lohi")

# click add to cart 
add_to_cart_btn = driver.find_element(By.NAME, "add-to-cart-sauce-labs-bike-light")
add_to_cart_btn.click()

# click cart icon
add_to_cart_btn = driver.find_element(By.CLASS_NAME, "shopping_cart_link")
add_to_cart_btn.click()

print(f"Username: {username}")
print(f"Password: {password}")

driver.close()

print("sample test case successfully completed")
