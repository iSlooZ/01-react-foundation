


export const BasicTypes = () => {

  const name: string = 'Fernando';

  const powers:string[] = ['React', 'ReactNative','Angular','Vue','Qwik'];

  powers.push('Next')

  return (
    <>
      <h3>Tipos básicos</h3>
      { name }
      <br />
      { powers.join(',') }
    </>
  )
}
