sleep 5
if curl localhost:8080 | grep -q 'Users'; then
  echo "Tests passed!"
  exit 0
else
  echo "Tests failed!"
  exit 1
fi
