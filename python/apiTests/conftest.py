import pytest
from types import SimpleNamespace
from support import http_requests

@pytest.fixture(autouse=True)
def json_req():
    base_url = 'http://localhost:3000'
    headers = { 'Content-Type': 'application/json' }
    request = http_requests.HTTP_JSON(base_url, headers)
    return request
