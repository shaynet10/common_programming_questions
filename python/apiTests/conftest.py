import pytest
from types import SimpleNamespace
from support import http_requests

@pytest.fixture()
def json_req():
    base_url = 'https://reqres.in/api'
    headers = { 'Content-Type': 'application/json' }
    request = http_requests.HTTP_JSON(base_url, headers)
    return request
