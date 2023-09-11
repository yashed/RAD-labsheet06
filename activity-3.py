from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.chrome.service import Service
from webdriver_manager.chrome import ChromeDriverManager
import time

driver = webdriver.Chrome(service=Service(ChromeDriverManager().install()))
driver.get("https://google.com")

name_in = driver.find_element(By.NAME, "q")
name_in.send_keys("selenium webdriver")
time.sleep(3)

log_link = driver.find_element(By.NAME, "btnK")
log_link.click()

driver.close()

print("sample test case successfully completed")
