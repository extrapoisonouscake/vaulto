import jose from 'jose'
const secret = new TextEncoder().encode(
	'ujq9BSnwZuHUNj1LTBzWEJpRV0qDt3mWktz26KAvzrYH1rV0JBcah8cJ4WxxU6Da',
  )
export async function getUserIdWithJWT(token:string){
	const { payload } = await jose.jwtVerify<{id:string}>(token, secret)
	return payload.id
}