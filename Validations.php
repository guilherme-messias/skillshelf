<?php

class Validations {
    public $validations = [];

    public function validate($rules, $data) {
        foreach ($rules as $dataKey => $rulesOfData) {
            foreach ($rulesOfData as $rule) {
                $fieldValue = $data[$dataKey] ?? null;
                if ($rule == "confirmed") {
                    $this->$rule($dataKey, $fieldValue, $data["{$dataKey}_confirmation"] ?? null);
                } elseif (str_contains($rule, ":")) {
                    $temp = explode(":", $rule);
                    $rule = $temp[0];
                    $ruleArg = $temp[1];
                    $this->$rule($ruleArg, $dataKey, $fieldValue);
                } else {
                    $this->$rule($dataKey, $fieldValue);
                }
            }
        }
        return $this;
    }

    private function required($fieldName, $fieldValue) {
        if (empty($fieldValue)) {
            $this->validations[] = "O campo {$fieldName} é obrigatório.";
        }
    }
    private function email($fieldName, $fieldValue) {
        if (!filter_var($fieldValue, FILTER_VALIDATE_EMAIL)) {
            $this->validations[] = "O campo {$fieldName} deve ser um email válido.";
        }
    }
    private function min($minLength, $fieldName, $fieldValue) {
        if (strlen($fieldValue) < $minLength) {
            $this->validations[] = "O campo {$fieldName} deve ter no mínimo {$minLength} caracteres.";
        }
    }
    private function confirmed($fieldName, $fieldValue, $fieldValueConfirmation) {
        if ($fieldValue !== $fieldValueConfirmation) {
            $this->validations[] = "O campo {$fieldName} não foi confirmado corretamente.";
        }
    }
    public function fails() {
        $_SESSION["validationErrors"] = $this->validations;
        return sizeof($this->validations) > 0;
    }
}
