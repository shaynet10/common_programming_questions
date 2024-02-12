# http_request.py
import json

import requests


class HTTP_JSON:
    """Performs HTTP requests and returns the results as JSON"""
    headers = ""
    base_url = ""
    response = ""
    json_response = ""
    users = ""

    def __init__(self, base_url, headers):
        self.base_url = base_url
        self.headers = headers

    def get(self, path):
        url = self.base_url + path
        self.response = requests.get(url)
        self.json_response = (self.response).json()
        self.users = self.json_response['data']
        return self

    def post(self, path, data):
        url = self.base_url + path
        headers = self.headers
        return (requests.post(url, data, headers)).json()
