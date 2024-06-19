import json
import matplotlib.pyplot as plt

# Function to load tasks from a JSON file
def load_tasks(json_file):
    with open(json_file, 'r') as file:
        tasks = json.load(file)
    return tasks

# Function to extract data for plotting
def extract_data(tasks):
    names = [task["name"] for task in tasks]
    estimated_durations = [float(task["estimated_duration"].replace(' h', '').replace('h', '')) for task in tasks]
    required_durations = [float(task["required_duration"].replace(' h', '').replace('h', '')) for task in tasks]
    return names, estimated_durations, required_durations

# Function to calculate the percentage of matching durations
def calculate_matching_percentage(estimated_durations, required_durations):
    matching_count = sum(1 for est, req in zip(estimated_durations, required_durations) if est == req)
    total_count = len(estimated_durations)
    percentage = (matching_count / total_count) * 100
    return percentage

# Function to plot the bar chart
def plot_bar_chart(names, estimated_durations, required_durations, matching_percentage):
    fig, ax = plt.subplots(figsize=(10, 8))
    bar_width = 0.35
    index = range(len(names))

    bar1 = plt.bar(index, estimated_durations, bar_width, label='Estimated Duration')
    bar2 = plt.bar([i + bar_width for i in index], required_durations, bar_width, label='Required Duration')

    plt.xlabel('Tasks')
    plt.ylabel('Hours')
    plt.title('Estimated vs Required Duration for Tasks')
    plt.xticks([i + bar_width / 2 for i in index], names, rotation=90)
    plt.legend(title=f'Matching Durations: {matching_percentage:.2f}%')

    plt.tight_layout()
    plt.show()

# Main function
def main():
    json_file = 'outputTrelloZeitaufwand.json'
    tasks = load_tasks(json_file)
    names, estimated_durations, required_durations = extract_data(tasks)
    matching_percentage = calculate_matching_percentage(estimated_durations, required_durations)
    plot_bar_chart(names, estimated_durations, required_durations, matching_percentage)

# Run the main function
if __name__ == '__main__':
    main()
