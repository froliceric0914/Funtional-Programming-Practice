weaponsWithNoises = [
    { name: 'Phaser', noise: 'bssszzsssss', universe: 'Star Trek' },
    { name: 'Blaster', noise: 'Pew Pew', universe: 'Star Wars' },
    { name: 'Sonic Screwdriver', noise: 'Pew Pew', universe: 'Dr. Who' },
    { name: 'Lightsaber', noise: 'Pew Pew', universe: 'Star Wars' },
    { name: 'Noisy Cricket', noise: 'Pew Pew', universe: 'Men in Black' },
]

//pass a unvierse and then console.log the noise
function weaponsFromUniverse(universe) {
    const usableWeapon = weaponsWithNoises.filter(
        (weapon) => weapon.universe === universe,
    )

    const useWeapon = (weaponName) => {
        const weapon = usableWeapon.find((w) => w.name === weaponName)

        if (weapon) {
            console.log(weapon.noise)
        } else {
            console.log(
                `${weaponName} is not a part of the ${universe} universe `,
            )
        }
    }

    return useWeapon
}

// USAGE
const useStarWarsWeapon = weaponsFromUniverse('Star Wars')

weaponsFromUniverse('Star Wars')('Lightsaber')

useStarWarsWeapon('Blaster') // console logs 'used Blaster: Pew Pew'

useStarWarsWeapon('Noisy Cricket') // console logs 'Noisy Cricket is not a part of the Star Wars universe'
