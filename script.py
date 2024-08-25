from interpreter import interpreter
import tempfile
import sys
import os
import json

# TODO:
try:
  arg1 = sys.argv[1]
except IndexError:
  sys.exit(1);

messages = []
for chunk in interpreter.chat(arg1, stream=True, display=False):
  messages.append(chunk)
  a = json.dumps(chunk)
  print(a)

# def write_messages_to_temp_file(messages):
#   with tempfile.NamedTemporaryFile(mode='w', delete=False) as temp_file:
#     for message in messages:
#       temp_file.write(message + '\n')

#   return temp_file.name

# def read_messages_from_temp_file(temp_file_path):
#   with open(temp_file_path, 'r') as temp_file:
#     messages = temp_file.readlines()
#   return [message.strip() for message in messages]

# temp_file_path = write_messages_to_temp_file(messages)
# print(temp_file_path)

# # Open and read the file
# messages_from_file = read_messages_from_temp_file(temp_file_path)
# print("Messages from the file:", messages_from_file)