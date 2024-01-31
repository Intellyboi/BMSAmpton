def create_html_files(number_of_files):
    for i in range(1, number_of_files + 1):
        file_content = f'''
        <!DOCTYPE html>
        <html>
        <head>
            <title>Generated HTML File {i}</title>
        </head>
        <body>
            <h1>This is HTML File {i}</h1>
            <p>This is the content of HTML File {i} generated using Python.</p>
        </body>
        </html>
        '''

        file_name = f'generated_file_{i}.html'
        with open(file_name, 'w') as file:
            file.write(file_content)
        print(f'File "{file_name}" created.')


# To create 5 HTML files, call the function with the number of files you want to generate
create_html_files(5)