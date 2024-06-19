import json
import csv
import os
import re

# Define the file paths
input_file_path = 'trello.json'
output_file_path = 'outputTrelloZeitaufwand.csv'

# Check if the input file exists
if not os.path.exists(input_file_path):
    print(f"Error: The file '{input_file_path}' does not exist.")
else:
    try:
        # Step 1: Load JSON data from the file
        with open(input_file_path, 'r', encoding='utf-8') as file:
            data = json.load(file)

        # Step 2: Filter the data
        filtered_cards = []
        for card in data['cards']:
            desc = card.get('desc', '')
            if "Geschätzte Dauer" in desc and "Benötigte Dauer" in desc:
                # Extract estimated and required durations using regex
                estimated_duration = re.search(r'Geschätzte Dauer:\s*(\d+\s*\w+)', desc)
                required_duration = re.search(r'Benötigte Dauer:\s*(\d+\s*\w+)', desc)

                estimated_duration = estimated_duration.group(1) if estimated_duration else ''
                required_duration = required_duration.group(1) if required_duration else ''

                filtered_cards.append({
                    'name': card.get('name', ''),

                })

        # Step 3: Write filtered data to CSV
        with open(output_file_path, 'w', newline='', encoding='utf-8') as csvfile:
            fieldnames = ['id', 'name', 'description', 'estimated_duration', 'required_duration', 'dateLastActivity']
            writer = csv.DictWriter(csvfile, fieldnames=fieldnames)

            writer.writeheader()
            for card in filtered_cards:
                writer.writerow(card)

        print(f"Filtered data has been written to {output_file_path}")

    except Exception as e:
        print(f"An error occurred: {e}")
