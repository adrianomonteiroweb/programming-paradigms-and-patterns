package main

import "fmt"

type Config struct {
	SettingA string
	SettingB int
}

var getConfigInstance = func() func() *Config {
	var instance *Config

	return func() *Config {
		if instance == nil {
			instance = &Config{}
		}
		return instance
	}
}()

func GetConfigInstance() *Config {
	return getConfigInstance()
}

func main() {
	instance1 := GetConfigInstance()
	instance2 := GetConfigInstance()

	instance1.SettingA = "Configuração 1A"
	instance1.SettingB = 10

	instance2.SettingA = "Configuração 2A"
	instance2.SettingB = 20

	if instance1 == instance2 {
		fmt.Println("As instâncias são as mesmas. Singleton bem-sucedido.")
		fmt.Printf("SettingA: %s, SettingB: %d\n", instance1.SettingA, instance1.SettingB)
	} else {
		fmt.Println("As instâncias não são iguais. Singleton falhou.")
	}
}
