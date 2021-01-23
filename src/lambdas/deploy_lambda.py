#!/usr/bin/python3
import argparse
import os
from zipfile import ZipFile


def zip_file(f_file_name):
    zipf = ZipFile(f_file_name + ".zip", "w")
    zipf.write("index.js")
    zipf.close()


def remove_file(f_file):
    if os.path.exists(f_file):
        os.remove(f_file)
        print("INFO: The file %s was removed" % f_file)
    else:
        print("\033[93m WARN: The file %s does not exist \033[0m" % f_file)


def update_lambda(f_function_name):
    # Get current dir
    currentDir = os.getcwd()
    function_zip_path = currentDir + "/" + \
        f_function_name + "/" + f_function_name + ".zip"
    # Remove zip file if already exists
    remove_file(function_zip_path)
    # Move to lambda folder
    os.chdir(f_function_name)
    # Zip Lambda function
    zip_file(f_function_name)
    print("INFO: Lambda Zip file created")
    # Update aws lambda function
    os.system("aws lambda update-function-code --function-name " +
              f_function_name + " --zip-file fileb://" + f_function_name + ".zip")


def main():
    parser = argparse.ArgumentParser()
    parser.add_argument("function_name", help="Lambda function name",
                        type=str)
    args = parser.parse_args()
    update_lambda(args.function_name)


if __name__ == "__main__":
    main()
