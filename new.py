import pandas as pd

# Define the data
data = {
    'State Name': ['Andhra Pradesh', 'Bihar', 'Goa', 'Gujarat', 'Karnataka', 'Maharashtra', 'Rajasthan', 'Tamil Nadu', 'Uttar Pradesh', 'West Bengal'],
    'Popular Food': ['Biryani', 'Litti Chokha', 'Fish Curry', 'Dhokla', 'Rava Idli', 'Vada Pav', 'Dal Baati Churma', 'Dosa', 'Chaat', 'Rosogolla'],
    'Population': [53303000, 120796000, 1967000, 60439000, 70817000, 112374000, 81029000, 80224000, 237882000, 101114000],
    'Land Area (sq km)': [162968, 94163, 3702, 196024, 191791, 307713, 342239, 130058, 243286, 88752],
    'Capital City': ['Amaravati', 'Patna', 'Panaji', 'Gandhinagar', 'Bengaluru', 'Mumbai', 'Jaipur', 'Chennai', 'Lucknow', 'Kolkata'],
    'Gender Ratio': [993, 918, 972, 919, 973, 925, 926, 996, 898, 950]
}

# Create a DataFrame
df = pd.DataFrame(data)

# Save to CSV
df.to_csv('states_of_india.csv', index=False)

print("CSV file 'states_of_india.csv' has been created successfully.")
    