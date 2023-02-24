const handleSubmit = (e) => {
  e.preventDefault();

  let data = {
    name,
    email,
    message,
    budget,
    phone,
  };
  if (human != 4) {
    setAlert('Wrong number!');
    setTimeout(() => {
      setAlert('');
    }, 4000);
  } else {
    setAlert('Sending');
    fetch('/api/contact', {
      method: 'POST',
      headers: {
        Accept: 'application/json, text/plain, */*',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    }).then((res) => {
      console.log('Response received');
      if (res.status === 200) {
        console.log('Response succeeded!');
        document.getElementById('create-course-form').reset();
        setAlert(
          'You send data successfully! We will contact you in short time!'
        );
        setSubmitted(true);
        setName('');
        setEmail('');
        setMessage('');
      }
    });
  }
};
