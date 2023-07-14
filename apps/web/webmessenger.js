Smooch.on('ready', function(){
    console.log(document.cookie)
});

Smooch.init({
    integrationId: '64aeeb79b842af6972370689', 
    jwt:  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6ImFwcF82NDU4ZTE0OTNmMDNkYmZiMGQ4NjUzNWQifQ.eyJzY29wZSI6InVzZXIiLCJleHRlcm5hbF9pZCI6InRlc3QyQGNvbXBhbnkuY29tIiwiaWF0IjoxNjg5MzQyNDU0fQ.qzjG0pPnuL0B-vmAgI_Uor-2RFQvVezgPJ1o4wpW8DE',
    externalId: 'test2@company.com',
    delegate: {
        beforeSend(message, data) {
            const payload = message.payload
            if (payload === 'AuthAction') {
                window.location.replace('http://localhost:5173/auth')
            }
            return message;
        }
    }
});
